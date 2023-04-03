import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './ArticlesForm.css'
import { setPost } from './ArticlesFormSlice'
import { nanoid } from '@reduxjs/toolkit'


const ArticlesForm = () => {
    return <>
    <Formik 
    initialValues={{
        title: '',
        description: ''
    }}
    validationSchema={Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required')
    })}
    onSubmit={(values, {resetForm}) => {
        resetForm()
        setPost({...values, id: nanoid()})
    }}
    >
        <Form>
            <div className='input-div'>
                <Field name='title' type="text" placeholder="New post"/>
            </div>
            <div className='input-div'>
                <Field name='description' type="text" placeholder="This is a description"/>
            </div>
            <button className='add-btn' type='submit'>Add article</button>
        </Form>
    </Formik>
    </>
}

export default ArticlesForm