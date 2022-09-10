// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
// import { LocalForm, Control, Errors } from 'react-redux-form';

// // VALIDATORS
// const required = (val) => val && val.length;
// const minLength = (len) => (val) => (val) && (val.length >= len);
// const maxLength = (len) => (val) => !(val) || (val.length <= len);

// class CommentForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isModalOpen: false
//         }
//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     };
//     toggleModal() {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen 
//         })
//     }
//     handleSubmit(vals) {
//         console.log('Current State is:' + JSON.stringify(vals));
//         alert('Current State is:' + JSON.stringify(vals));
//     }

//     render() {
//         return (
//             <>
//                 {/* COMMENT BUTTON VIEW */}
//                 <Button outline onClick={this.toggleModal}>
//                     <span className='fa fa-comments fa-lg'></span>
//                     Submit Comment
//                 </Button>


//                 <div className='container'>

//                     {/* COMMENT FORM MODAL*/}

//                     <Modal isOpen={this.state.isModalOpen} 
//                     toggle={this.toggleModal}>
//                         <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                         <ModalBody>
//                             <LocalForm onSubmit={this.handleSubmit}>
//                                 {/* RATING SECTION*/}
//                                 <Row className='form-group'>
//                                     <Label htmlFor='rating' md={12}>Rating</Label>
//                                     <Col md={12}>
//                                         <Control.select model='.rating' id='rating' name='rating'
//                                         className='form-control'
//                                         validators={{
//                                             required
//                                         }}>
//                                             <option>Select Rating</option>
//                                             <option>1</option>
//                                             <option>2</option>
//                                             <option>3</option>
//                                             <option>4</option>
//                                             <option>5</option>
//                                         </Control.select>
//                                         <Errors
//                                         className='text-danger'
//                                         model='.rating'
//                                         show='touched'
//                                         messages={{
//                                             required: 'Required!'
//                                         }} />
//                                     </Col>
//                                 </Row>

//                                 {/* AUTHOR SECTION*/}

//                                 <Row className='form-group'>
//                                     <Label htmlFor='author' md={12}>Your Name</Label>
//                                     <Col md={12}>
//                                         <Control.text model='.author' id='author' name='author'
//                                         className='form-control'
//                                         placeholder='Your Name'
//                                         validators={{
//                                             required, minLength: minLength(3), maxLength: maxLength(15)
//                                         }}
//                                         />
//                                         <Errors 
//                                         className='text-danger'
//                                         model='.author'
//                                         show='touched'
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be greater than two characters!',
//                                             maxLength: 'Must be 15 characters or less!'
//                                         }}
//                                         />
//                                     </Col>
//                                 </Row>

//                                 {/* COMMENT SECTION*/}

//                                 <Row className='form-group'>
//                                     <Label htmlFor='comment' md={12}>Comment</Label>
//                                     <Col md={12}>
//                                         <Control.textarea model='.comment' id='comment' name='comment' 
//                                         className='form-control'
//                                         rows='6'
//                                         />
//                                     </Col>
//                                 </Row>

//                                 {/* SUBMIT BUTTON - MODAL */}
//                                 <Row className='form-group'>
//                                     <Col md={12}>
//                                         <Button type='submit' color='primary'>Submit</Button>
//                                     </Col>
//                                 </Row>
//                             </LocalForm>
//                         </ModalBody>
//                     </Modal>
//                 </div>
//             </>
//         );
//     }
// }

// export default CommentForm;