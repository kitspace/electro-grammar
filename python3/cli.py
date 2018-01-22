import sys
import electro_grammar as eg;


def main(argv):
    tree = eg.parse(argv[1])
    print(tree)


if __name__ == '__main__':
    main(sys.argv)
