import {Layout} from 'components';
import {useAppDispatch, useAppSelector} from 'hooks';
import {TodoEditScreenProps} from 'navigation';
import {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {createTodo, todoSelectors, updateTodo} from 'store';
import {Button, FSize} from 'ui';
import {Input} from 'ui/input';

export const TodoEditScreen: FC<TodoEditScreenProps> = ({
  navigation,
  route,
}) => {
  const {todo} = route.params;
  const isEditing = !!todo?.id;

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(todoSelectors.getIsLoading);

  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Редактирование задачи' : 'Добавление задачи',
    });
  }, [isEditing]);

  const hasChanges =
    (todo?.description || '') !== description || (todo?.title || '') !== title;

  const disabled = !title || isLoading || !hasChanges;

  const handleSave = () => {
    const newTodo = {
      ...todo,
      title: title.trim(),
      description: description.trim(),
    };

    const onSuccess = () => navigation.goBack();

    if (isEditing) {
      dispatch(updateTodo(newTodo)).then(onSuccess);
    } else {
      dispatch(createTodo(newTodo)).then(onSuccess);
    }
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Input
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
          placeholder="Заголовок"
          mb={5}
        />
        <Input
          lineColor="transparent"
          style={styles.descriptionInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Описание"
          textAlignVertical="top"
          multiline
        />
      </ScrollView>

      <View style={styles.btnContainer}>
        <Button loading={isLoading} disabled={disabled} onPress={handleSave}>
          Сохранить
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  titleInput: {
    height: 42,
    fontSize: FSize.S18,
  },
  descriptionInput: {flex: 1, height: 230},
  btnContainer: {paddingHorizontal: 10, paddingVertical: 5},
});
