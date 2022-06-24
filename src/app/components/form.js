const Form = ({ formData, addNewForm, removeForm, handleChange }) => {
  return (
    <div>
      {formData.length === 0 ? <button onClick={addNewForm}>add</button> : null}
      {formData.map((form, index) => (
        <EachForm
          form={form}
          addNewForm={addNewForm}
          key={index}
          removeForm={removeForm}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default Form;

const EachForm = ({ form, addNewForm, removeForm, index, handleChange }) => {
  return (
    <div>
      <div>
        <input
          onChange={(e) => handleChange(e, index)}
          name='name'
          value={form.name}></input>
        <input
          onChange={(e) => handleChange(e, index)}
          name='age'
          value={form.age}></input>
      </div>
      {/* {form.formId} */}
      <button onClick={addNewForm}>add new</button>
      <button onClick={() => removeForm(index)}>delete</button>
    </div>
  );
};
