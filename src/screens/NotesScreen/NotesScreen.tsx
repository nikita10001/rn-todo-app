import {Layout} from 'components';
import {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NotesList} from './components/NotesList';
import {TODOS} from 'data/todo';
import {NotesScreenProps} from 'navigation';
import {Button} from 'ui';

export enum DisplayMode {
  LIST,
  CARDS,
}

export const NotesScreen: FC<NotesScreenProps> = ({}) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.CARDS,
  );

  const selectMode = (mode: DisplayMode) => {
    setDisplayMode(mode);
  };

  return (
    <Layout>
      <View style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
        <Button
          onPress={() => selectMode(DisplayMode.CARDS)}
          style={{flex: 1, height: 35}}>
          Карточки
        </Button>
        <Button
          onPress={() => selectMode(DisplayMode.LIST)}
          style={{flex: 1, height: 35}}>
          Список
        </Button>
      </View>
      <NotesList displayMode={displayMode} items={TODOS} />
    </Layout>
  );
};
const styles = StyleSheet.create({});
