import {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, ButtonType} from 'ui';

export enum FilterValue {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}
export type FilterItem = {
  id: number;
  value: FilterValue;
  label: string;
};
export const filterBtns = [
  {
    id: 1,
    value: FilterValue.All,
    label: 'Все',
  },

  {
    id: 2,
    value: FilterValue.Active,
    label: 'Активные',
  },
  {
    id: 3,
    value: FilterValue.Completed,
    label: 'Выполненные',
  },
];
interface TodoFilterProps {
  activeFilter: FilterItem;
  onFilterChange: (filter: FilterItem) => void;
}

export const TodoFilter: FC<TodoFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <ScrollView
      horizontal
      style={{
        minHeight: 52,
        maxHeight: 52,
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {filterBtns.map(filter => {
        const isActive = activeFilter.id === filter.id;
        return (
          <Button
            onPress={() => onFilterChange?.(filter)}
            type={isActive ? ButtonType.PRIMARY : ButtonType.OUTLINE}
            style={styles.btn}
            textStyle={{fontSize: 14}}
            key={filter.id}>
            {filter.label}
          </Button>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btn: {
    width: 'auto',
    paddingHorizontal: 15,
    height: 32,
    borderWidth: 1,
  },
});
