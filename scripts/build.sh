#!/bin/sh
set -e

. ./scripts/prebuild.sh
tsc && exec vite build
