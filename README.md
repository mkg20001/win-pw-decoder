# win-pw-decoder

Decode "encrypted" windows passwords

# What does it do

Decodes this...
```xml
<Password>
    <Value>cwB5AHMAdABlAG0AUABhAHMAcwB3AG8AcgBkAA==</Value>
    <PlainText>false</PlainText>
</Password>
```

...into this

`systemPassword`

(the `Password` part is appended, also part of the "encryption")

So it strips that as well

`system` is the "encrypted" password

# But, wait...

Yes, MS calls some shitty null-separation "encryption". Don't blame me!

# Usage

```shell
$ win-pw-decoder <string>
result
```
