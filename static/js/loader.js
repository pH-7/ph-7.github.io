/*
 * Author:          Pierre-Henry Soria <ph7software@gmail.com>
 * Copyright:       (c) 2012-2013, Pierre-Henry Soria. All Rights Reserved.
 * License:         CC-BY <http://creativecommons.org/licenses/by/3.0/>
 * Link:            http://github.com/pH-7
 */

var sFolder = '/static/js/';
var aFileList = [
    'ajph',
    'lib/tipsy',
    'lib/bootstrap',
    'date',
    'common'
];

for(i in aFileList)
    document.write('<script src="' + sFolder + aFileList[i] + '.js"></script>\n');
