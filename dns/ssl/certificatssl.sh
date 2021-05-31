path=$1
path=${path:-""}

DNS="$2.mayanatech.ddns.net"

openssl genrsa 1024 > ${path}/${DNS}.key
openssl req -new -subj "/CN=$DNS" -x509 -key ${path}/${DNS}.key -out ${path}/${DNS}.crt