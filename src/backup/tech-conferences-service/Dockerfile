FROM ubuntu
RUN apt-get update && apt-get install -y python3 python3-pip libpq-dev
COPY . /app
WORKDIR /app
RUN ls -al
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3", "main.py"]