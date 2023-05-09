import { Form, Input, Radio, Button } from 'antd';
import '../Scss/Form.scss';


const handleSubmit = event => {
    event.preventDefault();
    // call a function to perform the search using searchQuery
    // display search results
  };
  
const InputForm = () => {
    return(
        <div>   
            <Form layout="inline" onSubmit={handleSubmit}>  
                <Form.Item className='radio-item'>
                    <div>
                        <p className="radio-text">(Only For Medical Treatments)</p>
                        <div style={{ float: 'left' }} className="radio">Treatment inquiry for</div>
                        <div style={{ float: 'right' }}>
                            <Radio.Group>
                                <Radio value="Myself" className="radio"> Myself </Radio>
                                <Radio value="Someone"  className="radio"> Someone </Radio>
                            </Radio.Group>
                        </div>
                    </div>   
                </Form.Item>
                <Form.Item label="Name"className='item-label'>
                    <Input placeholder="Patient name" />
                </Form.Item>
                <Form.Item label="Phone or Email" className='item-label'>
                    <Input placeholder="Phone or Email" />
                </Form.Item>
                <Form.Item label="submit" className='submit-label' style={{ color: 'white' }}>
                    <Button className="custom-danger">SUBMIT</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default InputForm;