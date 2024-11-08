import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import {RootState} from 'store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
