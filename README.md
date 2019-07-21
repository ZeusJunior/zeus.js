# zeus.js
Yeah no i would not recommend using this, there are better options and this is old. Might come back to it but eh.

# Methods
`[]` is optional

### printMsg
Will respond with a simple `Module is working` in your console

### heartbeat(userToken, type [, timeOut])
Sends a heartbeat to backpack.tf, giving your listings the `automatic` symbol (lightning bolt).

- `userToken` - Your backpack.tf account's access token, which can be found [here](https://backpack.tf/connections).
- `type` - If set to `"sell"`, marks your sell orders as automatic. If set to `"all"`, marks all your listings as automatic.
- `timeOut` - If set, timeout in ms. Minimum must be 90000 ms to avoid spamming backpack.tf. If not set it'll use the minimum

### webSession(identitySecret [, timeOut])
Sets `SteamCommunity` and `TradeOfferManager` cookies and checks incoming confirmations

- `identitySecret` - Your steam identity_secret.
- `timeOut` - If set, timeout in ms. Minimum must be 10000 ms to avoid spamming steam. If not set it'll use the minimum

use `checkConfirmations();` from the [steamcommunity module](https://github.com/DoctorMcKay/node-steamcommunity/wiki/Steam-Confirmation-Polling#checkconfirmations). to force a check for confirmations.
