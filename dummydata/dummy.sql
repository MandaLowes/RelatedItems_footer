DROP DATABASE IF EXISTS dummy;

CREATE DATABASE dummy;

USE dummy;

CREATE TABLE mando (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(20),
    img TEXT,
    model VARCHAR(20),
    category VARCHAR(20)
);

INSERT INTO mando (item,img,model,category) VALUES ('X-wing','https://target.scene7.com/is/image/Target/GUEST_bda0cab8-b82e-4b0c-a07a-a3abe240e94f?wid=488&hei=488&fmt=pjpeg','S-Class','fighter');
INSERT INTO mando (item,img,model,category) VALUES ('Y-wing','https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=960','B-Class','bomber');
INSERT INTO mando (item,img,model,category) VALUES ('Death Star','https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6804058733049','MWD','Super weapon');
INSERT INTO mando (item,img,model,category) VALUES ('Tie Fighter','https://images-na.ssl-images-amazon.com/images/I/81fns--S5bL._SL1500_.jpg','I-Class','fighter/bomber');
INSERT INTO mando (item,img,model,category) VALUES ('Falcon','https://sh-s7-live-s.legocdn.com/is/image/LEGO/75192?scl=1.7&op_sharpen=1','Type 1','cargo ship');
INSERT INTO mando (item,img,model,category) VALUES ('AT-ST','https://vignette.wikia.nocookie.net/starwars/images/f/ff/ATST-SWBdice.png/revision/latest?cb=20151110032640','Type 1','walker');

