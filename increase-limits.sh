#!/bin/bash
ulimit -n 65535
echo "File descriptor limit increased to $(ulimit -n)"
