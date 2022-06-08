# Build System

We need a tool to automate common tasks:

- building binaries
- linting
- testing
- releasing
- installing development tools

Most common approach is to use Makefile. This approach would introduce a lot of bash code to our project. The other option is to write everything in go to keep our code as consistent as possible. Moreover, we are much better go developers than bash ones.

So here is the simple tool written in go which helps us in our daily work.

## Shell Configuration

For the purposes of this documentation, we assume that you have cloned the `cored` repository