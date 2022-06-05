export const CharacterReducer = (state, action) => {
  const types = {
    SELECT_CHARACTER: { ...state, isActive: true },
  }

  return types[action?.type] || state
}
