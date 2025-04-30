# Aplicatiu XML

Aquest document proporciona les instruccions per desplegar i utilitzar l'aplicatiu.

## Requisits previs

- Python instal·lat (versió 3.7 o superior).
- Accés a internet per al mode remot.

## Configuració de l'entorn virtual

1. Creeu un entorn virtual:

   ```bash
   python -m venv venv
   ```

2. Activeu l'entorn virtual:

   - **Windows**:
     ```bash
     .\venv\Scripts\activate
     ```
   - **Mac/Linux**:
     ```bash
     source venv/bin/activate
     ```

3. Instal·leu les dependències necessàries:

   ```bash
   pip install -r requirements.txt
   ```

   > **Nota**: Si no esteu familiaritzats amb els entorns virtuals, podeu consultar [aquesta guia](https://realpython.com/python-virtual-environments-a-primer/).

## Iniciar l'aplicatiu

1. Assegureu-vos que l'entorn virtual està activat.
2. Executeu l'aplicatiu:

   ```bash
   python app.py
   ```

3. L'aplicatiu estarà disponible a `http://127.0.0.1:5000`.

## Modes d'ús

L'aplicatiu pot funcionar en dos modes: **remot** i **local**.

### Mode remot

En aquest mode, l'aplicatiu utilitza l'XML directament des de la web de La Vanguardia.

- No cal cap configuració addicional.
- Només cal assegurar-se que hi ha connexió a internet.

### Mode local

En aquest mode, l'aplicatiu utilitza un fitxer XML descarregat.

1. Descarregueu el fitxer XML desitjat.
2. Col·loqueu-lo al directori especificat per l'aplicatiu.
3. Assegureu-vos que l'aplicatiu està configurat per utilitzar el mode local.

## Recursos addicionals

- Documentació de Flask: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
- Guia sobre entorns virtuals: [https://realpython.com/python-virtual-environments-a-primer/](https://realpython.com/python-virtual-environments-a-primer/)
