# LawinServerV3
### LawinServer V3 is a fortnite backend written in Node.js (based on lawinV2)

note: I am back and i will add whats missing soon and i need someone to add the quests since i find it hard to do dm me at discord @Marvelco or create an issue

## Credits
| Name | Contributions |
| --------------- | ----------- |
| [Lawin](https://github.com/Lawin0129) | Creator of V2 |
| [Marvelco](https://github.com/MarvelcoOGFN) | Creator of V3 |
| [xLoigi](https://github.com/xLoigi) | Added support a creator |


## Features:

### LawinServer V3
* Very fast login (faster than Lawinv2 or what ever backend that is out there)
* CloudStorage and ClientSettings (Settings Saving).
* Events (added updated keychain that includes galactus, travis, device, skyfire and more)
* Fixed logging in on some builds
* Working Battlepass from s2-s10 (can change but you have to update also the mcp. its made for chapter 1 seasons in chapter 2 they changed the system)
* Locker: (fully working)
    + Changing items.
    + Changing banner icon and banner color.
    + Changing item edit styles.
    + Favoriting items.
    + Marking items as seen.
* Friends: (fully working)
    + Adding friends.
    + Accepting friend requests.
    + Removing friends.
    + Blocking friends.
    + Setting nicknames.
    + Removing nicknames.
* Item Shop: (Fully working)
    + Customizable Item Shop.
    + Purchasing items from the Item Shop.
    + Gifting items to your friends.
    + Refunding system
    + Support a creator code
### XMPP Features (fully working)
- Parties (builds 3.5 to 14.50). ( will add more)
- Chat (whispering, global chat, party chat).
- Friends.

  
### NOTE: LawinServerV3 also does not support Save the World. (Will never add)

## Discord Bot Commands
### Commands:
- `/create {email} {username} {password}` - Creates an account on the backend (You can only create 1 account).
- `/details` - Retrieves your account info.
- `/lookup {username}` - Retrieves someones account info.
- `/exchange-code` - Generates an exchange code for login. (One time use for each code and if not used it expires after 5 mins).
- `/change-username {newUsername}` - You can change your username using this command.
- `/change-password {newPassword}` - You can change your password using this command.
- `/sign-out-of-all-sessions` - Signs you out if you have an active session.
### Moderation Commands:
- You can only use the moderation commands if you are a moderator.
- `/ban {targetUsername}` - Ban a user from the backend by their username.
- `/unban {targetUsername}` - Unban a user from the backend by their username.
- `/kick {targetUsername}` - Kick someone out of their current session by their username.
### How to set up moderators?
1) Go to .env in the directory you extracted LawinServerV3 into.
2) Open it, you should see a "moderators" section in the file.
3) You have to get your discord id and replace discordId with it.
4) You can set multiple moderators like this `["discordId","discordId2"]`.

## Hosting for others
You are allowed to host for others, however please credit me and don't remove my credits from `responses/contentpages.json`. (even my credits @Marvelco)

## How to host LawinServerV3
1) Install [NodeJS](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/try/download/community).
2) Download and Extract LawinServerV3 to a safe location.
3) Run "install_packages.bat" to install all the required modules.
4) Go to .env in the directory you extracted LawinServerV3 into.
5) Open it, set your discord bot token (DO NOT SHARE THIS TOKEN) and save it. The discord bot will be used for creating accounts and managing your account.
6) Run "start.bat", if there is no errors, it should work.
7) Use something to redirect the Fortnite servers to localhost:8080 (Which could be fiddler, ssl bypass that redirects servers, or cobalt)
8) When Fortnite launches and is connected to the backend, enter your email and password (or launch with an exchange code) then press login. It should let you in and everything should be working fine.
