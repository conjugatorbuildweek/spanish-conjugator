import React from 'react';

const VerbTenses = props => {
  console.log('p =', props);
  return (
    <div>
      <form>
        <label>
          <button type="checkbox" value="Present" onClick={props.setTenses} />
          Present (yo hablo)
        </label>
        <label>
          <input type="radio" value="Preterite" onClick={props.setTenses} />
          Preterite (yo hablé)
        </label>
        <label>
          <input type="radio" value="Imperfect" onClick={props.setTenses} />
          Imperfect (yo hablaba)
        </label>
        <label>
          <input type="radio" value="Conditional" onClick={props.setTenses} />
          Conditional (yo hablaría)
        </label>
        <label>
          <input type="radio" />
          Future (yo hablaré)
        </label>
        <label>
          <input type="radio" />
          Present Subjunctive (yo hable)
        </label>
        <label>
          <input type="radio" />
          Imperfect Subjunctive (yo hablara)
        </label>
        <label>
          <input type="radio" />
          Future Subjunctive (yo hablare)
        </label>
        <label>
          <input type="radio" />
          Imperative (tú habla)
        </label>
        <label>
          <input type="radio" />
          Imperative Negative (tú no hables)
        </label>
        <label>
          <input type="radio" />
          Gerund (Estoy hablando)
        </label>
        <label>
          <input type="radio" />
          Present Perfect (yo he hablado)
        </label>
        <label>
          <input type="radio" />
          Future Perfect (yo habré hablado)
        </label>
        <label>
          <input type="radio" />
          Past Perfect (yo había hablado)
        </label>
        <label>
          <input type="radio" />
          Condicional Perfect (yo habría hablado)
        </label>
      </form>
    </div>
  );
};

export default VerbTenses;
