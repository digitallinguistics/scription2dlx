/* eslint-disable
  max-nested-callbacks,
*/

const convert = require(`./scription2dlx`);

describe(`scription2dlx`, () => {

  describe(`text`, () => {

    it(`may be blank`, () => {

      const text = ``;

      const test = () => convert(text);

      expect(test).not.toThrow();

    });

  });

  describe(`metadata header`, () => {

    it(`must be in YAML (or JSON) format`, () => {

      const text = `
      ---
      How the world began
      ---
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`must not be empty`, () => {

      const text = `
      ---
      ---
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`must have a "title" property`, () => {

      const text = `
      ---
      abbreviation: A1
      ---
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`must not have an "utterances" property`, () => {

      const text = `
      ---
      title: How the world began
      utterances:
        - waxdungu qasi
          one day a man
      ---
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`may have other properties`, () => {

      const text = `
      ---
      title:        How the world began
      abbreviation: A1
      ---
      `;

      const test = () => convert(text);

      expect(test).not.toThrow();

    });

    it(`must be a valid DLx text schema`, () => {

      const text = `
      ---
      title: How the world began
      abbreviation: ^
      ---
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

  });

  describe(`interlinear schema`, () => {

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

      expect(morpheme.transcription).toBe(`waxt`);
      expect(morpheme.gloss).toBe(`day`);
      expect(utterance.translation).toBe(translation);

    });

    it(`2-line utterances default to transcription + translation`, () => {

      const transcription = `waxdungu qasi`;
      const translation   = `one day a man`;

      const text = `
      ${transcription}
      ${translation}
      `;

      const { utterances: [utterance] } = convert(text);

      expect(utterance.transcription).toBe(transcription);
      expect(utterance.translation).toBe(translation);

    });

    it(`must begin with a "\\schema" code`, () => {

      const text = `
      ---
      title: How the world began
      ---

      \\trs
      \\tln

      Waxdungu qasi,
      One day a man
      `;

      const { utterances: [utterance] } = convert(text);

      expect(utterance.transcript).not.toBe(``);

    });

    it(`may not have the same backslash code appear twice`, () => {

      const text = `
      \\schema
      \\tln
      \\morph
      \\gl
      \\tln
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`treats different orthographies / languages as separate backslash codes`, () => {

      const EnglishTranslation = `one day a man`;
      const SpanishTranslation = `un día un hombre`;

      const text = `
      \\schema
      \\txn
      \\tln-eng
      \\tln-spa

      waxdungu qasi
      ${EnglishTranslation}
      ${SpanishTranslation}
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.translation.eng).toBe(EnglishTranslation);
      expect(utterance.translation.spa).toBe(SpanishTranslation);

    });

    it(`must have valid backslash codes (ASCII characters)`, () => {

      const text = `
      \\schema
      \\txn
      \\tln
      \\nóm
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`should ignore unknown backslash codes`, () => {

      const text = `
      \\schema
      \\txn
      \\tln
      \\swad
      `;

      const test = () => convert(text);

      expect(test).not.toThrow();

    });

    it(`allows custom schemas`, () => {

      const transcript  = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
      const translation = `He left his brothers.`;

      const text = `
      \\schema
      \\trs
      \\tln

      ${transcript}
      ${translation}
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.transcript).toBe(transcript);
      expect(utterance.translation).toBe(translation);

    });

  });

  describe(`utterances`, () => {

    it(`are separated by empty lines`, () => {

      const text = `
      ---
      title: How the world began
      ---

      wetkš hus na·nča·kamankš wetk hi hokmiʔi
      He left his brothers.

      kun ču·gš ču·gš še·nink hup hi ničwiʔi
      He went and went till he came to the edge of a pond.
      `;

      const { utterances } = convert(text);

      expect(utterances.length).toBe(2);

    });

    it(`treats one extra line as a note line`, () => {

      const noteText = `This is the traditional opening to a story.`;

      const text = `
      waxt-qungu qasi
      day-one    man
      one day a man
      ${noteText}
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.notes.length).toBe(1);

      const { notes: [note] } = utterance;
      expect(note.text).toBe(noteText);

    });

    it(`ignores any additional unknown lines beyond the first note line`, () => {

      const text = `
      waxt-qungu qasi
      day-one    man
      one day a man
      This is a note.
      This is another note.
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.notes.length).toBe(1);

    });

    it(`may have backslash codes followed by multiple spaces`, () => {

      const translation = `one day a man`;

      const text = `
      \\morph waxt-qungu qasi
      \\tln   ${translation}
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.translation).toBe(translation);

    });

    it(`may have backslash codes followed by tabs`, () => {

      const translation = `one day a man`;

      const text = `
      \\morph waxt-qungu qasi
      \\tln\t\t${translation}
      `;

      const { utterances: [utterance] } = convert(text);
      expect(utterance.translation).toBe(translation);

    });

    it(`must have backslash codes for all lines if there is a backslash code on any line`, () => {

      const text = `
      \\trs Waxdungu qasi,
      one day a man
      `;

      const test = () => convert(text);

      expect(test).toThrow();

    });

    it(`may have multiple note lines`, () => {

      const text = `
      \\txn waxdungu qasi
      \\tln one day a man
      \\n   This is the first note.
      \\n   This is the second note.
      `;

      const { utterances: [utterance] } = convert(text);

      expect(utterance.notes.length).toBe(2);

    });

  });

});
