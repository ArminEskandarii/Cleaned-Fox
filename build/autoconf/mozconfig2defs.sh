#! /bin/sh
#
# The contents of this file are subject to the Netscape Public License
# Version 1.0 (the "NPL"); you may not use this file except in
# compliance with the NPL.  You may obtain a copy of the NPL at
# http://www.mozilla.org/NPL/
#
# Software distributed under the NPL is distributed on an "AS IS" basis,
# WITHOUT WARRANTY OF ANY KIND, either express or implied. See the NPL
# for the specific language governing rights and limitations under the
# NPL.
#
# The Initial Developer of this code under the NPL is Netscape
# Communications Corporation.  Portions created by Netscape are
# Copyright (C) 1999 Netscape Communications Corporation.  All Rights
# Reserved.
#

# mozconfig2defs.sh - Translates .mozconfig into options for client.mk.
#    Prints defines to stdout.
#
# See load-mozconfig.sh for more details
#
# Send comments, improvements, bugs to Steve Lamm (slamm@netscape.com).

print_header() {
  echo "# gmake"
  echo "# This file is automatically generated for client.mk."
  echo "# Do not edit. Edit $MOZCONFIG instead."
  echo
}

ac_add_options() {
  echo "# $* is not used by client.mk"
}

mk_add_options() {
  for _opt
  do
    # Escape shell characters, space, tab, dollar, quote, backslash,
    # and substitute '@<word>@' with '$(<word>)'.
    echo $_opt | sed -e 's/\([\"\\]\)/\\\1/g; s/@\([^@]*\)@/\$(\1)/g;'
  done
}

#
# main
#
out_file=$1
tmp_file="$out_file-tmp$$"

trap "rm -f $tmp_file; exit 1" 1 2 15

# find-mozconfig.sh 
#   In params:   $MOZCONFIG $HOME ($MOZ_MYCONFIG)
scriptdir=`dirname $0`
find_mozconfig="$scriptdir/find-mozconfig.sh"
if [ ! -f $find_mozconfig ]
then
  (cd $scriptdir/../../..; cvs co mozilla/build/autoconf/find-mozconfig.sh)
fi

MOZCONFIG=`$find_mozconfig`


if [ "$MOZCONFIG" ]
then
  print_header >$tmp_file
  . $MOZCONFIG >> $tmp_file

  if cmp -s $tmp_file $out_file; then
    rm $tmp_file
  else
    mv -f $tmp_file $out_file
  fi
else
  echo "# This file is automatically generated for client.mk." > $out_file
fi

