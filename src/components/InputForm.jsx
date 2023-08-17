import React from 'react'
import Form from 'react-bootstrap/Form';

const InputForm = () => {
  return (
    <Form className='w-50 mt-5 border p-5 shadow h-50 p-3 mb-5 bg-white rounded'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Father Name</Form.Label>
      <Form.Control type="name"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Mother Name</Form.Label>
      <Form.Control type="name"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>District</Form.Label>
      <Form.Control type="name"/>
    </Form.Group>
  </Form>
  )
}

export default InputForm



