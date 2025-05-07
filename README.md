# roto-control-bitwig-plugin-hash
A Very basic Bitwig Script to generate parameter id hashes for roto-control. based on roto v 0.1 beta

1. Download the control.js Drop into your bitwig script folder. (this is a script not an extension!).
2. load up script -> "Kirkwood West". -> "Plugin Data Hash"
3. load and navigate your cursor to plugin of interest.
4. Open up controller script console -> ctrl+enter -> "Show Control Script Console"
5. Observe output...

<img width="1092" alt="image" src="https://github.com/user-attachments/assets/9fa87b2a-50f2-4337-85f4-e1192957619f" />


The parameter index and pid hash output is used by the roto-control parameter.

This only reports plugin hashes, internal bitwig devices are likely incorrect. If you have more than 500 parameters, you'll need to somehow parse it into two lists. Feel free to do it and make a pull request.

This was made in an hour to help an artist wanting to manually edit their roto-control json. 
Shout out to David Wohlfahrt. Check out their music! https://soundcloud.com/dwohlfahrt/
