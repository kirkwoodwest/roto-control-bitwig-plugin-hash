# roto-control-bitwig-plugin-hash
A Very basic Bitwig Script to generate parameter id hashes for roto-control. based on roto v 0.1 beta

1. Download the control.js Drop into your bitwig script folder. (this is a script not an extension!).
   
<img width="470" alt="image" src="https://github.com/user-attachments/assets/e7584a4d-edf6-4d84-a70c-c8f64caba275" />

<img width="404" alt="Screenshot 2025-05-07 at 11 16 46 AM" src="https://github.com/user-attachments/assets/7d20232e-656d-40c0-97fb-2346ba09e4c3" />

3. load up script -> "Kirkwood West". -> "Plugin Data Hash"
4. load and navigate your cursor to plugin of interest.
5. Open up controller script console -> ctrl+enter -> "Show Control Script Console"
6. Observe output...

<img width="1092" alt="image" src="https://github.com/user-attachments/assets/9fa87b2a-50f2-4337-85f4-e1192957619f" />


The parameter index and pid hash output is used by the roto-control parameter.

If you have more than 500 parameters, you'll need to somehow parse it into two seperate debug outputs somehow. Feel free to do it and make a pull request.

This was made in an hour to help an artist wanting to manually edit their roto-control json. 
Shout out to David Wohlfahrt. Check out their music! https://soundcloud.com/dwohlfahrt/
