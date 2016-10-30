CREATE TABLE IF NOT EXISTS `Storage` (
`Id` int(1) NOT NULL auto_increment,
`Name` varchar(40) NOT NULL,
`HardDrive` varchar(40) NOT NULL,
`Phone`  varchar(7) NOT NULL,
`Pickedup` varchar(3) NOT NULL,
PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `Storage` (`Name`, `HardDrive`, `Phone`, `Pickedup`) VALUES
    ('John',' IDE',  '3456789', 'NO'),
    ('Mason', 'SAS', '5551234', 'YES'),
    ('Jake', 'SCSI', '6570123', 'NO'),
    ('Matt', 'SCSI', '1239090', 'NO'),
    ('Helen', 'SATA','5471423', 'YES');

CREATE TABLE IF NOT EXISTS `Password` (
`Id` int(1) NOT NULL auto_increment,
`FirstName` varchar(40) NOT NULL,
`LastName` varchar(40) NOT NULL,
`Password` varchar(40) NOT NULL,
`PasswordHint` varchar(40) NOT NULL,

PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `Password` (`FirstName`, `LastName`, `Password`, `PasswordHint`) VALUES
    ('John', 'Smith',  'jsmsk', 'js'),
    ('Mason', 'Michael', 'aaccss', 'aac'),
    ('Jake', 'Sam', 'samithki', 'samith'),
    ('Matt', 'Lee', 'matwsa', 'matw'),
    ('Helen', 'Johnson','51sdagye', 'number');

CREATE TABLE IF NOT EXISTS `Username` (
`Id` int(1) NOT NULL auto_increment,
`Username` varchar(40) NOT NULL,
`Firstname` varchar(40) NOT NULL,
`Lastname` varchar(40) NOT NULL,
`NameLength` int(2) NOT NULL,

PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `Username` (`Username`, `Firstname`, `Lastname`, `NameLength`) VALUES
    ('John', 'Smith',  'jsmsk', '40'),
    ('Mason', 'Michael', 'aaccss', '40'),
    ('Jake', 'Sam', 'samithki', '40'),
    ('Matt', 'Lee', 'matwsa', '40'),
    ('Helen', 'Johnson','51sdagye', '40');

