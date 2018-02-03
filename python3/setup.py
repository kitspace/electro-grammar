import os
from setuptools import setup, find_packages

os.system('make python3')
python3dir = os.path.dirname(os.path.realpath(__file__))
os.chdir(python3dir)

setup(
    name='electro-grammar',
    packages=find_packages(),
    version='0.0.1',
    description='Python module for parsing electronic component descriptions',
    long_description=open('README.md').read(),
    url='https://github.com/monostable/electro-grammar',
    keywords=['eda', 'cad', 'hdl', 'cpl', 'search', 'bom', 'qeda'],
    install_requires=[
        'antlr4-python3-runtime'
    ],
)
