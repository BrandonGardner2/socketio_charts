import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface ChartData {
  value: number;
  timestamp: string;
}

export interface PerCategory {
  key: string;
  total: number;
  max: number;
  min: number;
}
export interface DataState {
  data: ChartData[];
  perCategory: PerCategory[];
}

const generateInitialPerCategory = (): PerCategory[] => {
  let i = -100;
  const categories = [];

  while (i < 100) {
    categories.push({
      key: `${i} - ${i + 10}`,
      max: i + 10,
      min: i,
      total: 0
    });
    i += 10;
  }

  return categories;
};

const createInitialDataState = (): DataState => ({
  data: [],
  perCategory: generateInitialPerCategory()
});

const dataSlice = createSlice({
  name: 'data',
  initialState: createInitialDataState(),
  reducers: {
    addData(state: DataState, action: PayloadAction<ChartData>): void {
      const point = action.payload;
      const newPoint = {
        value: Number(point.value.toFixed(2)),
        timestamp: moment(point.timestamp).format('H:mm:ss')
      };

      state.data.push(newPoint);

      const index = state.perCategory.findIndex((category) => {
        return category.min < newPoint.value && category.max > newPoint.value;
      });

      state.perCategory[index].total += 1;
    }
  }
});

const { actions, reducer: dataReducer } = dataSlice;

export { createInitialDataState };
export const { addData } = actions;
export default dataReducer;
