insert into team(name, createdAt, updatedAt) values 
  ('ancient', now(), now()), 
  ('dragon', now(), now()), 
  ('legendary', now(), now()), 
  ('beast', now(), now());

insert into player(name, age, createdAt, updatedAt, team_id) values 
  ('용과드래곤 쿠키', 20, now(), now(), 2), 
  ('바다요정 쿠키', 21, now(), now(), 3), 
  ('서리여왕 쿠키', 22, now(), now(), 3), 
  ('블랙펄 쿠키', 23, now(), now(), 3), 
  ('달빛술사 쿠키', 19, now(), now(), 3), 
  ('뇌신무장 쿠키', 19, now(), now(), 3), 
  ('퓨어바닐라 쿠키', 28, now(), now(), 1), 
  ('세인트릴리 쿠키', 24, now(), now(), 1), 
  ('다크카카오 쿠키', 24, now(), now(), 1), 
  ('골드치즈 쿠키', 24, now(), now(), 1), 
  ('홀리베리 쿠키', 24, now(), now(), 1), 
  ('미스틱플라워 쿠키', 30, now(), now(), 4);

insert into profile(position, type, createdAt, updatedAt, player_id) values
  ('전방','돌격형', now(), now(), 1),
  ('중앙','폭발형', now(), now(), 2),
  ('중앙','마법형', now(), now(), 3),
  ('중앙','침투형', now(), now(), 4),
  ('중앙','마법형', now(), now(), 5),
  ('전방','돌격형', now(), now(), 6),
  ('후방','회복형', now(), now(), 7),
  ('중앙','폭발형', now(), now(), 8),
  ('전방','돌격형', now(), now(), 9),
  ('중앙','사격형', now(), now(), 10),
  ('전방','방어형', now(), now(), 11),
  ('후방','회복형', now(), now(), 12);

insert into game(date, location, createdAt, updatedAt) values
  ('2023-10-1', 'seoul', now(), now()),
  ('2023-10-3', 'london', now(), now()),
  ('2023-10-5', 'la', now(), now());

insert into teamgame(team_id, game_id, createdAt, updatedAt) values
  (1, 1, now(), now()), 
  (2, 1, now(), now()), 
  (2, 2, now(), now()), 
  (3, 1, now(), now()), 
  (1, 3, now(), now()), 
  (3, 3, now(), now());
  
select * from player;
select * from profile;
select * from team;
select * from game;
select * from teamgame;