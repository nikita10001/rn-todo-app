import {Layout} from 'components';
import {useAppDispatch} from 'hooks';
import {TodoEditScreenProps} from 'navigation';
import {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, FSize} from 'ui';
import {Input} from 'ui/input';

export const TodoEditScreen: FC<TodoEditScreenProps> = ({
  navigation,
  route,
}) => {
  const {id, isEditing} = route.params;
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Редактирование задачи' : 'Добавление задачи',
    });
  }, [isEditing]);

  const disabled = !title;

  const handleSave = () => {
    if (disabled) return;

    if (isEditing) {
      // editTodo({id, title, description})
    } else {
      // createTodo({title, description});
    }
  };

  return (
    <Layout>
      <ScrollView style={{flex: 1, padding: 10}}>
        <Input
          style={{
            height: 42,
            fontSize: FSize.S18,
          }}
          value={title}
          onChangeText={setTitle}
          placeholder="Заголовок"
          mb={5}
        />
        <Input
          lineColor="transparent"
          style={{flex: 1, height: 230}}
          value={description}
          onChangeText={setDescription}
          placeholder="Описание"
          textAlignVertical="top"
          multiline
        />
      </ScrollView>

      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
        <Button disabled={disabled} onPress={handleSave}>
          Сохранить
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({});
