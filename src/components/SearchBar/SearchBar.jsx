import { Field, Form, Formik } from "formik"
import s from './SearchBar.module.css'


const SearchBar = ({onQuery}) => {

  function handleSubmit (values) {
    onQuery(values.query)
  }

  return (
    <header className={s.header}>
      <h2 className={s.title}>Input your search query: </h2>
      <Formik initialValues={{query: ''}} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field className={s.input} name='query'
          type="text" autoComplete="off" autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.submitButton} type="submit">Search</button>
      </Form>
      </Formik>
    </header>
  )
}

export default SearchBar