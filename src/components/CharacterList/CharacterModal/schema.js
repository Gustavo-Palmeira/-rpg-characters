import * as Yup from 'yup'

export const characterSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  image: Yup.string().required('A imagem é obrigatória'),
  phrase: Yup.string().required('O bordão é obrigatório'),
  class: Yup.string().required('A classe é obrigatória'),
  background: Yup.string().required('A Biografia é obrigatória'),
})
