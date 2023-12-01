import React from "react";
import { useForm, Controller} from "react-hook-form";
import './App.css';

const App=()=>{
  const{control,handleSubmit,setValue}=useForm();

const onSubmit=(data)=>{
  console.log(data);
};
const handleSetValue=()=>{
  setValue('example','Hello, Welcome to React Hook Form...!');
};

return(
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <h2>SetValue Example</h2>
      <Controller
      name="example"
      control={control}
      defaultValue=""  // we can add default values here
      render={({field})=>(
        <input {...field} type="text" placeholder="Type Something..."/>
      )}
      />
    </div>
    <div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleSetValue}>SetValue</button>
    </div>
  </form>
);

};
export default App;