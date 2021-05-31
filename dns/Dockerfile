FROM kathara/quagga

COPY ./nginx.conf /etc/nginx/conf.d/mayanatech.conf
COPY ./ssl/certificatssl.sh /certificatssl.sh
COPY ./etc/bind /etc/bind

RUN apt update && apt install openssl nginx -y; \
    rm -rvf /etc/nginx/sites-enabled/*

# INIT REPOS
RUN mkdir -p /etc/nginx/ssl-cert/ /data/ssl-cert/ /opt/firefox /var/log/nginx/; \
    touch /var/log/nginx/access.log 

RUN chmod +x /certificatssl.sh; \
    /certificatssl.sh /etc/nginx/ssl-cert pc1; \
    /certificatssl.sh /etc/nginx/ssl-cert payment; \
    chmod -R 777 /etc/nginx/ssl-cert;cp -R /etc/nginx/ssl-cert/* /data/ssl-cert/;

RUN /bin/bash -c "echo -e \"\nsearch mayanatech.ddns.net\nnameserver 172.28.0.15\" >> /etc/resolv.conf"
RUN /bin/bash -c "echo -e \"\n172.28.0.10\tpc1.mayanatech.ddns.net\n172.28.0.11\tpayment.mayanatech.ddns.net\" >> /etc/hosts"

# DEVELLOPEMENT 
#RUN wget -O code.deb https://go.microsoft.com/fwlink/?LinkID=760868; \
#    wget -O firefox.tar.bz2 https://download-installer.cdn.mozilla.net/pub/firefox/releases/88.0.1/linux-x86_64/fr/firefox-88.0.1.tar.bz2
#
#RUN tar -xvf ./firefox.tar.bz2 && cp -R ./firefox/* /opt/firefox/; \
#    echo "export PATH=\${PATH}:/opt/firefox" >> ~/.bashrc;apt install libdbus-glib* -y; \
#    apt install ./code.deb -y;

# SITE
WORKDIR /app
RUN echo "<h1>HELLO</h1>" >> ./index.html

#RUN rm -rvf /data/ssl-cert/*;mkdir -p /etc/nginx/ssl-cert/ /ssl;apk update && apk add nodejs npm openssl;chmod +x /certificatssl.sh /entrypoint.sh && /certificatssl.sh /ssl;cp /ssl/* /etc/nginx/ssl-cert;