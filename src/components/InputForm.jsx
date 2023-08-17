import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
const InputForm = () => {
  const initialValue = {
    name: "",
    fathername: "",
    mothername: "",
    district: "",
  };
  const [data, setData] = React.useState(initialValue);
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  function clearInput() {
    setData(initialValue);
  }
  function onChangeHandler(event, key) {
    setData({
      ...data,
      [key]: event.target.value,
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setSearchParams({
      name: data.name,
      fathername: data.fathername,
      mothername: data.mothername,
      district: data.district,
    });
    navigate(`/link1?${searchParams.toString()}`);
    // navigate("/link2", { state: { data } });
    clearInput();
    // console.log(data);
  }
  return (
    <Form className="w-50 mt-5 p-5 shadow h-50 p-3 mb-5 bg-white rounded">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={data.name}
          onChange={(event) => onChangeHandler(event, "name")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Father Name</Form.Label>
        <Form.Control
          type="text"
          value={data.fathername}
          onChange={(event) => onChangeHandler(event, "fathername")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mother Name</Form.Label>
        <Form.Control
          type="text"
          value={data.mothername}
          onChange={(event) => onChangeHandler(event, "mothername")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>District</Form.Label>
        <Form.Control
          type="text"
          value={data.district}
          onChange={(event) => onChangeHandler(event, "district")}
        />
      </Form.Group>
      <Button
        className="btn btn-secondary"
        type="submit"
        onClick={(event) => onSubmitHandler(event)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
