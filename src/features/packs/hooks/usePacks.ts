import { useQuery } from '@tanstack/react-query';

import { fetchPacks } from '../services/packService';

export function usePacks() {
  return useQuery({
    queryKey: ['packs'],
    queryFn: fetchPacks,
  });
}
