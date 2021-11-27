import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// 讓 useSelector 可以推斷 state 資料類型
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
