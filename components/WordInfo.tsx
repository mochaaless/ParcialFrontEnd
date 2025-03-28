import { FunctionalComponent } from "preact/src/index.d.ts";
import { Word } from "../types.ts";

type Props = {
  word: Word;
};

const WordInfo: FunctionalComponent<Props> = (props) => {
  const word = props.word;
  return (
    <div className="wordInfo">
        <h1 className="word-title">Word Searched: {word.word}</h1>
        <div className="word-explanation">
            {word.meanings.map((meaning) => (
                <div className="meaning">
                    {meaning.definitions.map((def, index) => (
                        <div className="definition" key={index}>
                            <div className="definition-text">
                                <div className="definition-header">
                                    Definition
                                </div>
                                <div className="definition-info">
                                    {def?.definition ? def.definition : "No definition found"}
                                </div>
                            </div>
                            <div className="definition-example">
                                <div className="definition-header">
                                    Example
                                </div>
                                <div className="definition-info">
                                    {def?.example ? def.example : "No example found"}
                                </div>
                            </div>
                            <div className="synonyms">
                                <div className="definition-header">
                                    Synonyms
                                </div>
                                <div className="definition-info">
                                    {meaning.synonyms.map((syn, index) => (
                                        <a className="synonym" key={index} href={`/buscar/${syn}`}>
                                            {syn}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
};

export default WordInfo;
