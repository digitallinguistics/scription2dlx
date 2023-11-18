/**
 * This file applies tests for the interlinear gloss schema
 */

import convert from '../src/index.js';
import { expect }  from 'chai';

describe(`interlinear gloss schema`, () => {

  it(`must have valid backslash codes (basic Latin characters and hyphens only)`, () => {

    const text1 = `
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    \\nóm Benjamin Paul
    `;

    const text2 = `
    \\txn     wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln     He left his brothers.
    \\name_en Benjamin Paul
    `;

    const test1 = () => convert(text1);
    const test2 = () => convert(text2);

    expect(test1).to.throw(/valid/u);
    expect(test2).to.throw(/code/u);

  });

  it(`may not have the same backslash code appear twice`, () => {

    const text = `
    \\tln waxdungu qasi
    \\m   waxdungu qasi
    \\gl  one.day  man
    \\tln one day a man
    `;

    const test = () => convert(text);

    expect(test).to.throw(/more than once/u);

  });

  it(`treats different orthographies / languages as separate backslash codes`, () => {

    const EnglishTranslation = `one day a man`;
    const SpanishTranslation = `un día un hombre`;

    const text = `
    \\txn    waxdungu qasi
    \\tln-en ${EnglishTranslation}
    \\tln-es ${SpanishTranslation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation.en).to.equal(EnglishTranslation);
    expect(utterance.translation.es).to.equal(SpanishTranslation);

  });

  it(`must have backslash codes for all lines if there is a backslash code on any line`, () => {

    const text = `
    \\trs Waxdungu qasi,
    one day a man
    `;

    const test = () => convert(text);

    expect(test).to.throw(/all lines/u);

  });

  it(`should process unknown backslash codes`, () => {

    const Swadesh = `He left his brothers.`;
    const SwadPhon = `{phonetic transcription}`;

    const text = `
    \\txn  wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln  He left his brothers.
    \\swad ${Swadesh}
    \\swad-phon ${SwadPhon}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.swad).to.equal(Swadesh);
    expect(utterance[`swad-phon`]).to.equal(SwadPhon);

  });

  it(`infers the interlinear gloss schema from the first utterance`, () => {

    const transcript = `Waxdungu qasi,`;

    const text = `
    ---
    title: How the world began
    ---
    \\trs ${transcript}
    \\tln One day a man,

    ${transcript}
    One day a man,
    `;

    const { utterances: [, utterance] } = convert(text);

    expect(utterance.transcription.default).to.equal(``);
    expect(utterance.transcript.default).to.equal(transcript);

  });

  it(`treats a blank first utterance as a schema but not data`, () => {

    const transcript  = `Waxdungu qasi,`;
    const translation = `One day a man,`;

    const text = `
    ---
    title: How the world began
    ---
    \\trs
    \\tln

    ${transcript}
    ${translation}
    `;

    const { utterances: [u1, u2] } = convert(text);

    expect(u1.transcript.default).to.equal(transcript);
    expect(u1.translation).to.equal(translation);
    expect(u2).to.equal(undefined);

  });

  it(`2-line utterances default to transcription + translation`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;

    const text = `
    ${transcription}
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription.default).to.equal(transcription);
    expect(utterance.translation).to.equal(translation);

  });

  it(`3-line utterances default to morphemes + glosses + translation`, () => {

    const translation = `one day a man`;

    const text = `
    ---
    title: How the world began
    ---

    waxt-ʔungu qasi
    day-one    man
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes: [morpheme] }   = word;

    expect(morpheme.transcription.default).to.equal(`waxt`);
    expect(morpheme.gloss).to.equal(`day`);
    expect(utterance.translation).to.equal(translation);

  });

  it(`4-line utterances to default to transcription + morphemes + glosses + translation`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;

    const text = `
    ${transcription}
    waxt-qungu qasi
    day-one    man
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription.default).to.equal(transcription);
    expect(utterance.translation).to.equal(translation);
    expect(utterance.words.length).to.equal(2);

  });

  it(`5-line utterances default to transcription + morphemes + glosses + translation + note`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;
    const noteText      = `This is the traditional opening to a story.`;

    const text = `
    ${transcription}
    waxt-qungu qasi
    day-one    man
    ${translation}
    ${noteText}
    `;

    const { utterances: [utterance] } = convert(text);
    const { notes: [note] } = utterance;

    expect(utterance.transcription.default).to.equal(transcription);
    expect(utterance.words.length).to.equal(2);
    expect(utterance.translation).to.equal(translation);
    expect(utterance.notes.length).to.equal(1);
    expect(note.text).to.equal(noteText);

  });

  it(`allows custom schemas`, () => {

    const transcript  = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
    const translation = `He left his brothers.`;

    const text = `
    \\trs Waxdungu qasi,
    \\tln One day a man,

    ${transcript}
    ${translation}
    `;

    const { utterances: [, utterance] } = convert(text);
    expect(utterance.transcript.default).to.equal(transcript);
    expect(utterance.translation).to.equal(translation);

  });

  it(`treats an extra line as a note line`, () => {

    const noteText = `This is a note.`;

    const text = `
    waxt-qungu qasi
    day-one    man
    one day a man

    naancaakamankx hokmiqi
    brothers       he.left
    he left his brothers
    ${noteText}
    `;

    const { utterances: [, utterance] } = convert(text);
    const { notes: [note] }             = utterance;

    expect(note.text).to.equal(noteText);

    const props = Object.keys(utterance);
    const hasNoteProp = props.some(prop => /^n-[0-9]/u.test(prop));

    expect(hasNoteProp).to.equal(false);

  });

  it(`treats any additional unknown lines as note lines`, () => {

    const text = `
    waxdungu qasi
    waxt-qungu qasi
    day-one    man
    one day a man
    This is a note.
    This is another note.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.notes.length).to.equal(2);

  });

  it(`may have multiple note lines`, () => {

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\n   This is the first note.
    \\n   This is the second note.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.notes.length).to.equal(2);

  });

  it(`allows custom backslash codes`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;

    const text = `
    \\trans ${transcription}
    \\wt    ${transcription}
    \\tl    ${translation}
    `;

    const codes = {
      tln: `tl`,
      txn: `trans`,
      w:   `wt`,
    };

    const { utterances: [utterance] } = convert(text, { codes });

    expect(utterance.transcription.default).to.equal(transcription);
    expect(utterance.translation).to.equal(translation);

    const { words: [word] } = utterance;

    expect(word.transcription.default).to.equal(`waxdungu`);

  });

  it(`does not duplicate lines in the output`, () => {

    const text = `
    # 039
    \\trs-en What features do you look for when selecting…
    \\tln What features do you look for when selecting…
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance[`trs-en`]).to.equal(undefined);

  });

  it(`allows undefined backslash codes`, () => {

    const lineText = `This is an undefined line.`;

    const text = `
    \\txn jambo dunia
    \\tln hello world
    \\undef ${lineText}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.undef).to.equal(lineText);

  });

  it(`throws a helpful error message`, function() {

    const text = `# Menominee
    \\txn pemētaehkipew
    \\m   paemet-aehkw-ape
    \\gl  crosswise-face-sit
    \\gl  initial-medial-final
    \\tln S/he sits sideways.
    \\s   (Bloomfield 1975: 208)`;

    const test = () => convert(text, { errors: true });

    expect(test).to.throw(`The "\\gl" code`);

  });

});
