export const CharacterReducer = (state, action) => {
  const types = {
    SELECT_CHARACTER: { ...state, character: action?.payload?.character, isActive: true },
    DESELECT_CHARACTER: { ...state, isActive: false },
  }

  return types[action?.type] || state
}
