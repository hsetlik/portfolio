#!/bin/bash
cd ../../portfolio-photos/img
IMGPATH="../../portfolio/public/img"
ls -a

cp -r cpp-project-images $IMGPATH
cp -r web-project-images $IMGPATH
cp -r portrait.png $IMGPATH
