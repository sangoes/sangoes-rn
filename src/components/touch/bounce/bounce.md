#### Props
- `level: number`
  The maximum scale of the bounce animation (default: 1.1)
- `onPress: function`
  An optional function to be called after a press

### Example
```js

render() {
  return <Bounce
            onPress={()=>console.log("Pressed!")}
            level={1.1}>
            <View
              style={{
                width: 100,
                padding:8
              }}>
              <Text>Click Me!</Text>
            </View>
  </Bounce>
}
```