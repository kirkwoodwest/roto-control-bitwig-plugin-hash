# roto-control-bitwig-plugin-hash
A Very basic Bitwig Script to generate parameter id hashes for roto-control. based on roto v 0.1 beta

1. Drop into your bitwig script folder.(not extension).
2. load up script -> "Kirkwood West". -> "Plugin Data Hash"
3. load and navigate your cursor to plugin of interest.
4. Open up controller script console -> ctrl+enter -> "Show Control Script Console"
5. Observe output...

<img width="1155" alt="image" src="https://github.com/user-attachments/assets/9d73f66e-6698-46e4-922a-f8bac0abd944" />

The first index and hash output is used by the roto-control parameter.

This only reports plugin hashes, internal bitwig devices are likely incorrect. Also, if you have more than 500 parameters, you'll need to somehow parse it into two lists. Feel free to do it and make a pull request.

This was made in an hour to help an artist wanting to manually edit their roto-control json. 
Shout out to David Wohlfahrt. Check out their music! https://soundcloud.com/dwohlfahrt/
