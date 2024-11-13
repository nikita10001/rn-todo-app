import {Layout} from 'components';
import {useTheme} from 'context';
import {useAppDispatch, useAppSelector} from 'hooks';
import {NotesEditScreenProps} from 'navigation';
import {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {createTodo, todoSelectors, updateTodo} from 'store';
import {Button, FSize} from 'ui';
import {Input} from 'ui/input';
import {getStyles} from './styles';

export const NotesEditScreen: FC<NotesEditScreenProps> = ({
  navigation,
  route,
}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  const {note} = route.params;
  const isEditing = !!note?.id;

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(todoSelectors.getIsLoading);

  const [title, setTitle] = useState(note?.title || '');
  const [description, setDescription] = useState(note?.description || '');

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Редактирование задачи' : 'Добавление задачи',
    });
  }, [isEditing]);

  const hasChanges =
    (note?.description || '') !== description || (note?.title || '') !== title;

  const disabled = !title || isLoading || !hasChanges;

  const handleSave = () => {
    const newTodo = {
      ...note,
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
          mb={10}
          placeholder="Заголовок"
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
