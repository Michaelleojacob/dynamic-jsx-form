import Form from './components/form';
import { useState } from 'react';
import { generateKey } from './utils';

const App = () => {
  const [formData, setFormData] = useState([
    { name: '', age: '', formId: generateKey() },
  ]);
  const addNewForm = () =>
    setFormData((prevState) => [
      ...prevState,
      { name: '', age: '', formId: generateKey() },
    ]);
  const removeForm = (index) =>
    setFormData(formData.filter((item, i) => i !== index));

  //# attempt 1 -- does NOT work
  // const handleChange = (e, index) => {
  //   console.log(`index: ${index}`);
  //   console.log(`property name: ${e.target.name}`);
  //   const newArr = [...formData];
  //   newArr[index] = e.target.value;
  //   console.log(newArr);
  // };

  // //attempt2 -- does not work
  // const handleChange = (e, index) => {
  //   const { name, value } = e.target;
  //   // formData.map((item, i) => console.log(formData[index][name]));
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [index]: { ...prevState[index], name: value },
  //   }));
  // };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData(
      formData.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  return (
    <div>
      <button onClick={() => console.log(formData)}>log data</button>
      <Form
        formData={formData}
        addNewForm={addNewForm}
        removeForm={removeForm}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
