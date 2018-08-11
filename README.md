# zeus.js
Random stuff for me to use

# Methods

### printMsg
Will respond with a simple `Module is working` in your console

### heartbeat(userToken, type, timeOut)
- `userToken` - Your backpack.tf account's access token, which can be found [here](https://backpack.tf/connections)
- `type` - If set to `"sell"`, marks your sell orders as automatic. If set to `"all"`, marks all your listings as automatic.
- `timeOut` - Timeout in ms, minimum must be 90000 ms to avoid spamming backpack.tf