import React, { useEffect, useState } from 'react'
import {
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { Modal, Card, CardHeader } from './styles'
import { Form, Formik } from 'formik'
import { characterSchema } from './schema'
import ImageIcon from '@mui/icons-material/Image'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import ClassIcon from '@mui/icons-material/Class'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import { ADD_CHARACTER } from '../../../graphql/mutation'
import { useMutation } from '@apollo/client'

const CharacterModal = ({ characterModal, setCharacterModal }) => {
  const [modalOpen, setModalOpen] = useState(characterModal)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [addCharacter] = useMutation(ADD_CHARACTER)

  const registerCharacter = (values) => {
    setLoading(true)
    setError(false)
    try {
      addCharacter({
        variables: {
          ...values,
        },
      })
      setCharacterModal(false)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setModalOpen(characterModal)
  }, [characterModal])

  return (
    <Modal open={modalOpen} onClose={() => setCharacterModal(false)}>
      <Card>
        <CardHeader title="Cadastrar personagem" />
        <CardContent>
          <Formik
            initialValues={{
              name: '',
              description: '',
              image: '',
              phrase: '',
              class: '',
              background: '',
            }}
            onSubmit={registerCharacter}
            validationSchema={characterSchema}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="name"
                      type="text"
                      label="Nome"
                      value={values.name}
                      onChange={({ target }) =>
                        setFieldValue('name', target.value)
                      }
                      error={touched.name && errors?.name?.length > 0}
                      helperText={touched.name && errors.name}
                      InputProps={{
                        endAdornment: <PersonIcon sx={{ color: '#4a0607' }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="image"
                      type="text"
                      label="URL da imagem"
                      value={values.image}
                      onChange={({ target }) =>
                        setFieldValue('image', target.value)
                      }
                      error={touched.image && errors?.image?.length > 0}
                      helperText={touched.image && errors.image}
                      InputProps={{
                        endAdornment: <ImageIcon sx={{ color: '#4a0607' }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="phrase"
                      type="text"
                      label="Bordão"
                      value={values.phrase}
                      onChange={({ target }) =>
                        setFieldValue('phrase', target.value)
                      }
                      error={touched.phrase && errors?.phrase?.length > 0}
                      helperText={touched.phrase && errors.phrase}
                      InputProps={{
                        endAdornment: (
                          <HistoryEduIcon sx={{ color: '#4a0607' }} />
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="class"
                      type="text"
                      label="Classe"
                      value={values.class}
                      onChange={({ target }) =>
                        setFieldValue('class', target.value)
                      }
                      error={touched.class && errors?.class?.length > 0}
                      helperText={touched.class && errors.class}
                      InputProps={{
                        endAdornment: <ClassIcon sx={{ color: '#4a0607' }} />,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="description"
                      type="text"
                      label="Descrição"
                      value={values.description}
                      rows={4}
                      multiline
                      onChange={({ target }) =>
                        setFieldValue('description', target.value)
                      }
                      error={
                        touched.description && errors?.description?.length > 0
                      }
                      helperText={touched.description && errors.description}
                      InputProps={{
                        endAdornment: (
                          <AutoStoriesIcon sx={{ color: '#4a0607' }} />
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="background"
                      type="text"
                      label="Biografia"
                      value={values.background}
                      rows={4}
                      multiline
                      onChange={({ target }) =>
                        setFieldValue('background', target.value)
                      }
                      error={
                        touched.background && errors?.background?.length > 0
                      }
                      helperText={touched.background && errors.background}
                      InputProps={{
                        endAdornment: (
                          <MenuBookIcon sx={{ color: '#4a0607' }} />
                        ),
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#4a0607', mt: 4 }}
                      >
                        {loading ? 'Carregando' : 'Enviar'}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                {error && (
                  <Typography color="error">
                    Não foi possível enviar o personagem, tente novamente
                  </Typography>
                )}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default CharacterModal
