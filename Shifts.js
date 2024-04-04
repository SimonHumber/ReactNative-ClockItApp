import React, {useState} from "react";
import { View, TouchableOpacity } from "react-native";
import {Agenda} from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const setTimeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function Shifts() {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      let newItems = {}; // Create a new empty object
      setItems(newItems); // Set the items state to the new empty object
    }, 1000);
  };
  
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <View>{item.name}</View> */}
              <Avatar.Text label="Shift" style={{ fontSize: 10 }} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2017-05-16'}
      renderItem={renderItem}
    />
  </View>
  );
}
