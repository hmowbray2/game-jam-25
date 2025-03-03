import { useContext } from 'react';
import { CharacterAvatarContext } from '../context/CharacterAvatarContext';

export const useCharacter = () => {
  const context = useContext(CharacterAvatarContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterAvatarProvider');
  }
  return context;
};
