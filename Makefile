build_container:
	docker build -t tddcoach-hugo .

run_container:
	docker run -i -t -p 1313:1313 \
       --volume $(shell pwd)/src:/src \
       --volume $(shell pwd)/public:/public \
       --volume $(shell pwd)/scripts:/scripts \
       tddcoach-hugo sh

run_dev_server:
	docker run -i -t -p 1313:1313 \
       --volume $(shell pwd)/src:/src \
       --volume $(shell pwd)/public:/public \
       --volume $(shell pwd)/scripts:/scripts \
	   tddcoach-hugo /scripts/dev_server.sh
