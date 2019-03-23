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

  describe(`lines`, () => {

    it(`are stripped of leading / trailing whitespace`, () => {

      const text = `
      \\txn      wetkš hus na·nča·kamankš wetk hi hokmiʔi
      \\tln He left his brothers.\u0020\u0020\u0020
      `;

      const { utterances: [utterance] } = convert(text);

      expect(utterance.translation.endsWith(` `)).toBe(true);

    });

    describe(`speaker`, () => {

      it(`must be a valid abbreviation`, () => {

        const text = `
        \\sp  Benjamin Paul
        \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
        \\tln He left his brothers.
        `;

        const test = () => convert(text);

        expect(test).not.toThrow();

      });

    });

    describe(`transcript`, () => {

      it(`may be in multiple formats`, () => {

        const SwadeshTranscript = `wetkšˊ husˊ na·nča·kamankšˊ wetkˊ hi hokmiʔiˊ`;
        const DFTTranscript     = `wetkš↗ hus↗ na·nča·kamankš↗ wetkˊ hi hokmiʔiˊ↗`;

        const text = `
        \\trs-swad ${SwadeshTranscript}.
        \\trs-dft  ${DFTTranscript}
        \\tln      He left his brothers.
        `;

        const { utterances: [utterance] } = convert(text);
        const { transcript }              = utterance;

        expect(transcript.swad).toBe(SwadeshTranscript);
        expect(transcript.dft).toBe(DFTTranscript);

      });

    });

    describe(`phomemic transcription`, () => {

      it(`should remove phonemic slashes`, () => {

        const transcription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;

        const text = `
        /${transcription}/
        He left his brothers.
        `;

        const { utterances: [utterance] } = convert(text);

        expect(utterance.transcription).toBe(transcription);

      });

      it(`may have multiple orthographies`, () => {

        const SwadeshTranscription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
        const APATranscription     = `wetkš hus naːnčaːkamankš wetk hi hokmiʔi`;

        const text = `
        \\txn-swad ${SwadeshTranscription}
        \\txn-apa  ${APATranscription}
        \\tln      He left his brothers.
        `;

        const { utterances: [utterance] } = convert(text);
        const { transcription } = utterance;

        expect(transcription.swad).toBe(SwadeshTranscription);
        expect(transcription.apa).toBe(APATranscription);

      });

    });

    describe(`phonetic transcription`, () => {

      it(`may only contain IPA characters`, () => {

        const text = `
        wetkš hus na·nča·kamankš wetk hi hokmiʔi
        He left his brothers.
        `;

        const test = () => convert(text);

        expect(test).toThrow();

      });

      it(`should remove phonetic brackets`, () => {

        const transcription = `wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi`;

        const text = `
        \\phon [${transcription}]
        \\tln He left his brothers.
        `;

        const { utterances: [utterance] } = convert(text);

        expect(utterance.phonetic).toBe(transcription);

      });

      it(`may not appear in multiple orthographies`, () => {

        const text = `
        \\phon-ipa  wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
        \\phon-swad wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
        \\tln He left his brothers.
        `;

        const test = () => convert(text);

        expect(test).toThrow();

      });

    });

    describe(`morphemes`, () => {

      it(`may be in multiple orthographies`, () => {


      });

      it(`may separate words by one or more white spaces or tabs`, () => {


      });

      it(`must have the same number of words as the glosses line`, () => {


      });

      it(`must have the same number of morphemes in each word as the glosses line`, () => {


      });

      it(`may not contain non-breaking hyphens`, () => {


      });

      it(`must be present if the glosses line is present`);

    });

    describe(`glosses`, () => {

      it(`may be in multiple languages`, () => {


      });

      it(`may separate words with one or more white spaces or tabs`, () => {


      });

      it(`may be omitted when the morphemes line is present`, () => {


      });

      it(`treats morphemes as grammatical when written in CAPS`, () => {

        const text = `
        \\m  ni-na-ku-pend-a
        \\gl 1SG.SUBJ-PRES-2SG.OBJ-love-IND
        `;

        const { utterances: [utterance] } = convert(text);
        const { words: [word] } = utterance;
        const { morphemes: [, morpheme] } = word;

        expect(morpheme.gloss).toBe(`PRES`);

      });

      it(`should not contain non-breaking hyphens`, () => {


      });

    });

    describe(`literal translation`, () => {

      it(`removes brackets`, () => {

        const text = `
        \\txn ninakupenda
        \\lit [I love you]
        `;

      });

      it(`may be in multiple languages`, () => {


      });

    });

    describe(`free translation`, () => {

      it(`may be in multiple languages`, () => {


      });

    });

    describe(`note`, () => {

      it(`may have source, language, and text`, () => {

        const text = `
        \\n DWH-eng: Is this utterance past or present tense?
        `;

      });

      it(`may have a source and text`, () => {

        const text = `
        \\n DWH: Is this utterance past or present tense?
        `;

      });

      it(`may have only text`, () => {});

      it(`may not have only a language and text`, () => {

        const text = `
        \\n -eng: Is this utterance past or present tense?
        `;

      });

      it(`must only use ASCII letters and numbers for the source`, () => {


      });

      it(`must only use ASCII letters and numbers for the language/orthography`, () => {


      });

      it(`assumes the language of the note is English if not specified`, () => {


      });

      it(`removes white space before the colon`, () => {

        const text = `
        \\n DWH-eng : This is a note.
        `;

      });

      it(`may have multiple white spaces or tabs after the colon`, () => {

        const text = `
        \\n DWH:\t \tThis is a note.
        `;

      });

    });

  });

});
